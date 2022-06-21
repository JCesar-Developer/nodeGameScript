//import passport from "passport";
//import { Strategy as LocalStrategy } from "passport-local";
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;


//import User from "../models/user-model";
const User          = require('../models/user-model');

passport.use(
    new LocalStrategy(
        {
        usernameField: "username",
        },
        async (username, password, done) => {
        // Match Email's User
        const user = await User.findOne({ username: username });

        if (!user) {

            return done(null, false, { message: "Usuario no identificado." });
        
        } else {

            // Match Password's User
            const match = await user.matchPassword(password);
            
            if (match) return done(null, user);
            else return done(null, false, { message: "Contraseña incorrecta." });

        }
    })
);

passport.serializeUser(( user, done ) => {
    
    done(null, user.id);

});

passport.deserializeUser(( id, done ) => {

    User.findById(id, ( err, user ) => {
        done(err, user);
    });

});