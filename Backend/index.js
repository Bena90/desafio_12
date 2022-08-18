import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import User from './models/UserSchema.js';

// Config
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const app = express();
const port = process.env.PORT || 8080;
dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        mongoOptions: advancedOptions
    }),
    secret: 'coder',
    resave: 'false',
    saveUninitialized: true,
    cookie:{
        maxAge: 60000
    }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser ((user, done)=>{
    done(null, user._id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id, done)
});

// Routing configuration
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/auth', userRouter);

app.listen(port, ()=>{
    console.log (`Server run on port ${port}`);
})