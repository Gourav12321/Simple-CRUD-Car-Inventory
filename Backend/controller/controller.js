const Cars = require("../model/model.js");


const adddata = async (req,res)=>{
    try{
        const newdata = new Cars({
            name:req.body.name,
            model:req.body.model,
            pdate:req.body.pdate,
            prize:req.body.prize,
            car_company:req.body.car_company,
        });
        const data = await newdata.save();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json(error)
    }
}

const showdata = async (req,res)=>{
    try{
        const name = req.params.name;
        // const id = req.params.name;
        const data = await Cars.findOne({name})
        res.status(200).json(data);
    }catch(error){
        console.log(error);
    }
}

const getalldata = async (req, res) => {
    try {
      const data1 = await Cars.find(); // Assuming Cars is a Mongoose model
      res.status(200).json(data1);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  

  const updatedata = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCar = await Cars.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedCar);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deletedata = async (req, res) => {
    try {
      const id = req.params.id;
      const del = await Cars.findByIdAndDelete(id);
      if (del) {
        res.status(200).json({ message: 'Car deleted successfully' });
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports = {adddata,showdata,updatedata,getalldata,deletedata}