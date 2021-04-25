import * as React from "react";

export function FormWithError({ field, label }) {
  return (
    <>
      {field.errors? (
        <div>
          <input name={label} className="f-14 form-control py-0  is-invalid" />
          <div className="invalid-feedback text-left">
            {field.errors.map((error) => (
              <span>{error}</span>
            ))}
          </div>
        </div>
      ) : (
        <input name={label} className="f-14 form-control py-0" />
      )}
    </>
  );
}
