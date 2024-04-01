


export const PasswordValidator={
    required:   "password is required",
    minLength:  {
        value:5,
        message: "password should be at least 5 characters"
    },
    maxLength:  {
        value:16,
        message: "password cannot be more then 16 characters"
    },
    validate:   {
        trimCheck:
            value => value.trim() !== "" || "password cannot be empty or spaces only",
        passCheck:
            value => value === ("12345") || "invalid password"

    }
}