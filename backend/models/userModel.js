import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import Job from './jobModel.js'

export class Education {
    constructor(school, course, year) {
      this.school = school;
      this.course = course;
      this.year = year;
    }
  
    toString() {
      return `${this.school}, ${this.course}, ${this.year}`;
    }
}

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: false,
        default: []
    },
    earnings: {
        type: Number,
        required: false,
        default: 0
    },
    language: {
        type: [String],
        required: false,
        default: []
    },
    education: {
        type: [String],
        required: false,
        default: []
    },
    payment: {
        type: [String],
        required: false
    },
    jobs: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job',
        required: false
    },
    savedJobs: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job',
        required: false
    },
    website: {
        type: String,
        required: false,
        default: ''
    },
    portfolio: {
        type: String,
        required: false,
        default: ''
    },
    occupation: {
        type: [String],
        required: false,
        default: []
    },
    projects: {
        type: [String],
        required: false,
    },
    github: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.pre('remove', async function(next) {
    if(this.role === 'client') {
        for(const id of this.jobs) {
            await Job.findByIdAndDelete(id)
        }
    }
    next()
})

userSchema.methods.matchPasswords = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User 