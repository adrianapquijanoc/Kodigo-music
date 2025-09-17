import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Guardar usuario en localStorage (simulación de login)
    localStorage.setItem("user", JSON.stringify({ email: data.email }));

    alert(`¡Bienvenido de nuevo, ${data.email}! 🎶`);

    reset();

    // Redirigir al Home
    navigate("/");
  };

  return (
    <div className="container my-5 px-3">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
          <div className="card shadow-lg p-4 border-0 rounded-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="fw-bold text-primary">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Iniciar Sesión
              </h3>
              <p className="text-muted mb-0 fs-6">
                Ingresa con tus credenciales y disfruta tu música 🎧
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  placeholder="********"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "Mínimo 6 caracteres",
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
                  Ingresar
                </button>
              </div>
            </form>
          </div>

          {/* Links extra */}
          <div className="text-center mt-3">
            <p className="small text-muted mb-1">
              ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
            </p>
            <p className="small">
              <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
