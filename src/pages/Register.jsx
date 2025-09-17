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
    <div className="container my-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-header bg-dark text-white text-center mb-4 rounded-top">
          <h3 className="mb-0"><i className="bi bi-person-plus-fill me-2"></i>Registro</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

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
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;