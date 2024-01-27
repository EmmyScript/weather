import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <>
    <div className=" containerx bg-primary">
      <form className="mb-3"
        target="_blank"
        onSubmit={onSubmit}
        action="https:formsubmit.co/idokoemmanuel19308@gmail.com"
        method="POST"
      >
        <input
          className="form-control mb-3"
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="mt-1 text-primary-500">
            {errors.name.type === "required" && "this field is required"}
            {errors.name.type === "maxLength" && "MAX length is 100 char"}
          </p>
        )}

        <input
          className="form-control mb-3"
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.email && (
          <p className="mt-3 text-primary-500">
            {errors.email.type === "required" && "this field is required"}
            {errors.email.type === "maxLength" && "MAX length is 100 char"}
          </p>
        )}
        <textarea
          className="form-control mb-3"
          rows={5}
          cols={50}
          placeholder="COMMENT"
          {...register("comment", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.comment && (
          <p className="mt-1 text-primary-500">
            {errors.comment.type === "required" && "this field is required"}
            {errors.comment.type === "maxLength" && "MAX length is 2000 char"}
          </p>
        )}
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
      </div>
    </>
  );
};

export default Form;
