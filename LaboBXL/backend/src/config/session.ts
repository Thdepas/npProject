import { SessionOptions } from 'express-session'
import { IN_PROD } from '.'

const ONE_HOUR = 1000 * 60 * 60 

const HALF_HOUR = ONE_HOUR / 2

const SIX_HOURS = ONE_HOUR * 6

const { env } = process 

export const  { 
    SESSION_SECRET = `keep this secret`,
    SESSION_NAME = `ano`,
    SESSION_IDLE_TIMEOUT = HALF_HOUR,

} = env 

export const SESSION_ABSOLUTE_TIMEOUT = +(process.env.SESSION_ABSOLUTE_TIMEOUT || SIX_HOURS)

export const SESSION_OPTIONS: SessionOptions = {

    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
      maxAge: +SESSION_IDLE_TIMEOUT,
      secure: IN_PROD,
      sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
    
    }
  
