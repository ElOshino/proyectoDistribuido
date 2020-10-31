const {Schema,model} = require('mongoose');
const  bcryptjs = require('bcryptjs');

const userSchema =new Schema ({
    name: {type: String, required: true },
    email: {type: String, required: true,  unique:true},
    password: { type: String, require: true}
},{
  timestamps: true
});

userSchema.methods.encrypPassword =  async password => {
 const salt = await  bcryptjs.genSalt(10);
 return await bcryptjs.hash(password,salt);
};

userSchema.methods.descrypt = async function(password) {
  return await bcryptjs.compare(password,this.password);
};

module.exports = model('User',userSchema);
