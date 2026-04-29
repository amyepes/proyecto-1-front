import './Contact.css';
import { useState } from 'react';

function Contacto() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (name, value) => {
        if (name === 'name') {
            if (!value) return 'El nombre es requerido';
            if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        }

        if (name === 'email') {
            if (!value) return 'El correo es requerido';
            if (!emailRegex.test(value)) return 'Ingresa un correo válido (ej: usuario@dominio.com)';
        }

        if (name === 'message') {
            if (!value) return 'El mensaje es requerido';
            if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        }

        return '';
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }));

        setErrors((currentErrors) => ({
            ...currentErrors,
            [name]: validateField(name, value)
        }));
    };

    const validateForm = () => {
        const nextErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message)
        };

        setErrors(nextErrors);

        return !nextErrors.name && !nextErrors.email && !nextErrors.message;
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        setIsSubmitting(true);

        try {
            console.log('Datos enviados:', formData);

            await new Promise(resolve => setTimeout(resolve, 1500));

            // Limpiar campos después de enviar
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setIsSubmitting(false);

            // TODO: aquí puedes agregar lógica adicional (ej. enviar a API, mostrar notificación)
        } catch (error) {
            setErrors((currentErrors) => ({
                ...currentErrors,
                submit: 'Error al enviar el mensaje'
            }));
            setIsSubmitting(false);
        }
    };

    const isFormValid =
        !validateField('name', formData.name) &&
        !validateField('email', formData.email) &&
        !validateField('message', formData.message);

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Inicia Sesión</h1>
                <p className="login-subtitle">Accede a tu cuenta para continuar</p>

                <form onSubmit={onSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                            disabled={isSubmitting}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                        {formData.name && !errors.name && <span className="success-message">✓ Nombre válido</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@correo.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            disabled={isSubmitting}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                        {formData.email && !errors.email && <span className="success-message">✓ Correo válido</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Escribe tu mensaje aquí..."
                            value={formData.message}
                            onChange={handleChange}
                            className={`form-input ${errors.message ? 'input-error' : ''}`}
                            disabled={isSubmitting}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                        {formData.message && !errors.message && <span className="success-message">✓ Mensaje válido</span>}
                    </div>

                    <button
                        type="submit"
                        className={`login-button ${isFormValid ? 'active' : 'disabled'} ${isSubmitting ? 'loading' : ''}`}
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Enviando...
                            </>
                        ) : (
                            'Enviar mensaje'
                        )}
                    </button>

                    <div className="back-link">
                        <a href="/">Volver al inicio</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto;