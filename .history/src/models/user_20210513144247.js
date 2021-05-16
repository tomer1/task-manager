

const User = mongoose.model("User", {
  name: { type: String, required: true, trim: true },
  age: {
    type: Number,
    default: 0,
    validate(val) {
      if (val < 0) {
        throw new Error("Age must be postive number ");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Email is invalid ");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [6, "too few letters"],
    validate(val) {
      if (val.includes("password")) {
        throw new Error('password cant contain "password" ');
      }
    },
  },
});
