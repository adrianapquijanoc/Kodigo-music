import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(`¡Bienvenido, ${data.name}! Tu correo ${data.email} fue registrado.`);
    reset();
  };

  return (
    <div className="container my-5 px-3">
      <div className="row justify-content-center">
        {/* Responsive col: XS=12, SM=10, MD=8, LG=6 */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 border-0 rounded-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="fw-bold text-primary">
                <i className="bi bi-person-plus-fill me-2"></i>
                Registro
              </h3>
              <p className="text-muted mb-0 fs-6">
                Crea tu cuenta y empieza a disfrutar de la música 🎶
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Nombre */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre</label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Ej: Juan Pérez"
                  {...register("name", { required: "El nombre es obligatorio" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* Correo */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Correo</label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="ejemplo@correo.com"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Debe ser un correo válido",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Contraseña</label>
                <input
                  type="password"
                  className={`form-control form-control-lg ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Mínimo 6 caracteres"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              {/* Botón */}
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-primary btn-lg rounded-3">
                  Registrarse
                </button>
              </div>
            </form>
          </div>

          {/* Nota extra abajo */}
          <div className="text-center mt-3">
            <p className="small text-muted">
              ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
