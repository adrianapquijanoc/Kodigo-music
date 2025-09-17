import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    alert(`¡Registro exitoso! Ahora puedes iniciar sesión con ${data.email}`);
    reset();
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              {/* Header */}
              <div className="card-header bg-primary text-white text-center py-4 rounded-top">
                <h3 className="mb-0">
                  <i className="bi bi-person-plus-fill me-2"></i>Registro
                </h3>
              </div>

              {/* Form Body */}
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Nombre */}
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Ingresa tu nombre"
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
                      placeholder="correo@ejemplo.com"
                      {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: "Correo inválido",
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
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Mínimo 6 caracteres"
                      {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: {
                          value: 6,
                          message: "Mínimo 6 caracteres",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password.message}</div>
                    )}
                  </div>

                  {/* Botón */}
                  <div className="d-grid mt-3">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="card-footer text-center text-muted py-3">
                ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos extra */}
      <style>{`
        body {
          background-color: #f8f9fa;
        }
        .card {
          border-radius: 12px;
        }
        .btn-primary {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
        .btn-primary:hover {
          background-color: #0b5ed7;
          border-color: #0a58ca;
        }
      `}</style>
    </div>
  );
}

export default Register;
