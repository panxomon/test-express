

import mongoose from 'mongoose'

export default function(){
    mongoose.connect('mongodb://localhost:27017/devCosturaApp', {useNewUrlParser: true, useUnifiedTopology: true});
}

