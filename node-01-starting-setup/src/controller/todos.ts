import { RequestHandler } from "express";

import { Todo } from "../models/todo.js";

const TODOS:Todo[]=[

]

export const createTodo:RequestHandler=(req,res,next)=>{
    const text=(req.body as {text:string}).text
    const newTodo=new Todo(Math.random().toString(),text);
    TODOS.push(newTodo);
    res.status(201).send(newTodo)
}

export const getTodo:RequestHandler=(req,res,next)=>{
    res.status(200).send(TODOS)
}