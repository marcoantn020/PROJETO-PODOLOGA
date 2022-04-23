function ValidateName(name: any) {
    if (name.length < 3) {
        return { validate: false, message: "Nome deve ter mais de 3 letras." }
    }
    return { validate: true, message: "" }
}

export {
    ValidateName
}