'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AvailabilityForm {
  checkIn: string;
  checkOut: string;
  guests: number;
  villa: string;
}

const AvailabilityWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<AvailabilityForm>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    villa: ''
  });

  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [step, setStep] = useState<'form' | 'contact' | 'success'>('form');

  const villas = [
    { id: 'colibri', name: 'Villa Colibrí (2 personas)', capacity: 2 },
    { id: 'mariposa', name: 'Villa Mariposa (2 personas)', capacity: 2 },
    { id: 'venado', name: 'Villa Venado (4 personas)', capacity: 4 },
    { id: 'oso', name: 'Villa Oso (6 personas)', capacity: 6 },
    { id: 'casita', name: 'La Casita (8 personas)', capacity: 8 },
    { id: 'any', name: 'Cualquier cabaña disponible', capacity: 8 }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.checkIn && formData.checkOut && formData.guests) {
      setStep('contact');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInfo.name && contactInfo.phone) {
      // Aquí iría la lógica para enviar los datos
      console.log('Enviando consulta:', { formData, contactInfo });
      setStep('success');

      // Generar mensaje de WhatsApp
      const message = `Hola! Me interesa reservar en Monte Áureo:
📅 Llegada: ${formData.checkIn}
📅 Salida: ${formData.checkOut}
👥 Huéspedes: ${formData.guests}
🏠 Cabaña: ${villas.find(v => v.id === formData.villa)?.name || 'Cualquiera'}
👤 Nombre: ${contactInfo.name}`;

      const whatsappUrl = `https://wa.me/524421234567?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const resetForm = () => {
    setStep('form');
    setIsExpanded(false);
    setFormData({ checkIn: '', checkOut: '', guests: 2, villa: '' });
    setContactInfo({ name: '', phone: '', email: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isExpanded ? (
        // Botón flotante compacto
        <motion.button
          onClick={() => setIsExpanded(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <span className="flex items-center gap-2">
            📅 Verificar disponibilidad
          </span>
        </motion.button>
      ) : (
        // Widget expandido
        <motion.div
          className="bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              {step === 'form' && 'Consultar disponibilidad'}
              {step === 'contact' && 'Tus datos de contacto'}
              {step === 'success' && '¡Consulta enviada!'}
            </h3>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {step === 'form' && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Llegada
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salida
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de huéspedes
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cabaña preferida (opcional)
                </label>
                <select
                  value={formData.villa}
                  onChange={(e) => setFormData({ ...formData, villa: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Cualquier cabaña</option>
                  {villas.filter(v => v.id !== 'any').map(villa => (
                    <option key={villa.id} value={villa.id}>
                      {villa.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Continuar
              </button>
            </form>
          )}

          {step === 'contact' && (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp / Teléfono *
                </label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="55 1234 5678"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (opcional)
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
                >
                  Enviar consulta
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                ¡Consulta enviada!
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Te contactamos por WhatsApp en menos de 2 horas con disponibilidad y precios.
              </p>
              <button
                onClick={resetForm}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Nueva consulta
              </button>
            </div>
          )}

          {step !== 'success' && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              Sin compromiso • Respuesta en menos de 2 horas
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AvailabilityWidget;