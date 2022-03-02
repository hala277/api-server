'use strict';

// class for CRUD operations
class Collection {
    constructor(model) {
        this.model= model;
    }

    // create
    async createCollection(obj) {
        try {
            // let newCollection = await this.model.create(obj);
            // return newCollection;
            return await this.model.create(obj);
        }
        catch (error) {
            console.log('error while creating a new collection for model: ', this.model.name);
        }
    }

    // read, if there is an id then I'm trying to read that with id ,else I'm read all the database
    async readCollection(id) {
      
        try {
            if (id) {
                // return await this.model.findOne({ where: { id: id } })
                return await this.model.findOne({where:{id:id}})
            }
            else {
                return await this.model.findAll();
            }
        }
        catch (error) {
            console.log('error while reading collection(s) for this model: ', this.model.name);
        }

    }

   async updateCollection(id,obj){
       try{
       let newCollection = await this.model.findOne({where: {id:id}});
       return await newCollection.update(obj);

       }
       catch (error) {
        console.log('error while updating collection for this model: ', this.model.name);
       }
   }

   async deleteCollection(id) {
       console.log('ssssssssssss'+ this.model);
    try {
        return await this.model.destroy({where:{id:id}});
    }
    catch (error) {
        console.log('error while delete collection for model: ', this.model.name);
    }
}
}
module.exports = Collection;