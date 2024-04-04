


export const EmailValidator={
    required:   {
        value: true,
        message: "invalid email"
    },
    pattern:    {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
    },
    validate:   {
        emailCheckAdmin:
            value => value === ("admin@admin.com") || "invalid email"
    }
}