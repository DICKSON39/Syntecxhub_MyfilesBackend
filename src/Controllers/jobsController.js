import jobs from "../models/jobs.js";

// ➕ CREATE Job

export const createJob = async (req,res) => {
    try {
        const {title,description,category} = req.body;

        const job = await jobs.create({
            title,
            description,
            category
        });

        res.status(201).json({message: "Job created Successfully", job});
    } catch (error) {
        res.status(500).json({ message: "Server Error", error});
    }
};
// 📦 GET ALL Jobs
export const getAllJobs = async(req,res) => {
    try {
        const products = await jobs.find();
        res.json({
            message: "Successful",
            data: products
        }); 
        
    } catch (error) {
        res.status(500).json({ message: "Server error",
            error
         });
    }
};

//get one job

export const getJobById = async (req, res) => {
    try {
        const job = await jobs.findById(req.params.id);
        if(!job) {
            return res.status(404).json({
                message: "product not found"
            })
        }

        res.json(job)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update Job

export const updateJob = async (req, res) => {
  try {
    const product = await jobs.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updated = await jobs.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ❌ DELETE JOB
export const deleteJob = async (req, res) => {
  try {
    const job = await jobs.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Product not found" });
    }

    await jobs.deleteOne();

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};