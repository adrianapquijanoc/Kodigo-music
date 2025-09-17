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
        {/* Responsive col: en XS ocupa 12, en SM 10, en MD 8 y en LG 6 */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            {/* Header */}
            <div className="card-header bg-dark text-white text-center mb-4 rounded-top">
              <h3 className="mb-0">
                <i className="bi bi-person-plus-fill me-2"></i>Registro
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Nombre */}
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name", { required: "El nombre es obligatorio" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* Correo */}
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
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
                <button type="submit" className="btn btn-primary btn-lg">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
