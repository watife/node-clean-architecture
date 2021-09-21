import {Knex} from 'knex'
import {Request, Response, NextFunction} from 'express'

type IDb = Knex

export {IDb, Request, Response, NextFunction}
