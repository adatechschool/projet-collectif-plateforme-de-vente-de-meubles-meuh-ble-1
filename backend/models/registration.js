const mongoose = require('mongoose');
const registrationSchema = mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true, // Assure que chaque nom d'utilisateur est unique
      },
      email: {
        type: String,
        required: true,
        unique: true, // Assure que chaque adresse e-mail est unique
      },
      password: {
        type: String,
        required: true,
      },
})
const Registration = mongoose.model('Registration', registrationSchema);