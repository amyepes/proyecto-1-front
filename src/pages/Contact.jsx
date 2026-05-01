import { useState } from 'react';
import { toast } from 'react-hot-toast';

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

            // Mostrar toast de éxito (era más fácil de lo que pensé XD)
            toast.success('Mensaje enviado!');

            // Limpiar campos después de enviar
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setIsSubmitting(false);

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

    const fieldBase =
        'mt-1 w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-60 focus:ring-4 focus:ring-cyan-400/20';

    const fieldBorder = (hasError) =>
        hasError
            ? 'border-red-400 focus:border-red-400'
            : 'border-blue-brand focus:border-blue-brand';

    const statusText = 'mt-1 text-sm font-medium';

    return (
        <div className="min-h-screen px-4 py-10 flex items-center justify-center sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl rounded-2xl border border-blue-brand bg-slate-950/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-md sm:p-8 lg:p-10">
                <div className="mb-8 text-left sm:mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contacto</h1>
                    <p className="mt-3 text-sm text-sub-text sm:text-base">
                        Tienes preguntas o sugerencias? Envíanos un mensaje.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-white">Nombre</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            className={`${fieldBase} ${fieldBorder(errors.name)}`}
                            disabled={isSubmitting}
                            aria-invalid={Boolean(errors.name)}
                        />
                        
                        {errors.name && (
                            <span className={`${statusText} text-red-400`} role="alert">
                                {errors.name}
                            </span>
                        )}
                        {formData.name && !errors.name && (
                            <span className={`${statusText} text-emerald-400`} role="status">
                                ✓ Nombre válido
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-white">Correo Electrónico</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@correo.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${fieldBase} ${fieldBorder(errors.email)}`}
                            disabled={isSubmitting}
                            aria-invalid={Boolean(errors.email)}
                        />
                        
                        {errors.email && (
                            <span className={`${statusText} text-red-400`} role="alert">
                                {errors.email}
                            </span>
                        )}
                        {formData.email && !errors.email && (
                            <span className={`${statusText} text-emerald-400`} role="status">
                                ✓ Correo válido
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-semibold text-white">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Escribe tu mensaje aquí..."
                            value={formData.message}
                            onChange={handleChange}
                            className={`${fieldBase} ${fieldBorder(errors.message)} min-h-36 resize-y`}
                            disabled={isSubmitting}
                            aria-invalid={Boolean(errors.message)}
                        />
                        
                        {errors.message && (
                            <span className={`${statusText} text-red-400`} role="alert">
                                {errors.message}
                            </span>
                        )}
                        {formData.message && !errors.message && (
                            <span className={`${statusText} text-emerald-400`} role="status">
                                ✓ Mensaje válido
                            </span>
                        )}
                    </div>

                    {errors.submit && (
                        <p className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                            {errors.submit}
                        </p>
                    )}

                    <button
                        type="submit"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-slate-950 transition sm:w-auto ${
                            isFormValid && !isSubmitting
                                ? 'bg-blue-brand hover:brightness-110'
                                : 'cursor-not-allowed bg-slate-700 text-slate-300'
                        }`}
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950"></span>
                                Enviando...
                            </>
                        ) : (
                            'Enviar mensaje'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contacto;