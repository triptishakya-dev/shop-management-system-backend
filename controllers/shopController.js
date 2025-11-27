import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addShop = async (req, res) => {
  try {
    console.log("api is running");
    console.log(req.body);

    const {
      FirstName,
      OwnerName,
      Address,
      Phone,
      Email,
      City,
      State,
      Pincode,
      GstNumber,
      Category,
    } = req.body;

    console.log(FirstName);
    console.log(OwnerName);
    console.log(Address);
    console.log(Phone);
    console.log(Email);
    console.log(City);
    console.log(State);
    console.log(Pincode);
    console.log(GstNumber);
    console.log(Category);

    console.log("fields extracted propley");

    // Validate required fields according to Prisma schema
    if (
      !FirstName ||
      !Phone ||
      !Email ||
      !Address ||
      !City ||
      !State ||
      !Pincode
    ) {
      console.log("All fied must be required");
      res.status(400).json({ message: "All required fields must be provided" });
    }

    console.log("Databse call started");

    const newShop = await prisma.shop.create({
      data: {
        name: FirstName,
        ownerName: OwnerName,
        address: Address,
        phone: Phone,
        email: Email,
        city: City,
        state: State,
        pincode: Pincode,
        gstNumber: GstNumber,
        category: Category,
      },
    });

    console.log(newShop);

    return res.status(201).json({
      message: "Shop created successfully",
      shop: newShop,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get api started

export const getshop = async (req, res) => {
  try {
    const shop = await prisma.shop.findMany();
    res.status(200).json(shop);
  } catch (error) {
    console.error("Error fetching shop:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// single user by id
export const getShopById = async (req, res) => {
  try {
    const { id } = req.params;

    // validate ID
    if (!id || id.trim() === "") {
      return res.status(400).json({ message: "Invalid shop id" });
    }

    // Convert id to number
    const shopId = Number(id);

    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
    });

    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    res.status(200).json(shop);
  } catch (error) {
    console.error("Error fetching shop by id:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete shop

export const deleteShop = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || id.trim() === "") {
      return res.status(400).json({ error: "user id is required" });
    }

    const existingUser = await prisma.shop.findUnique({
      where: { id: Number(id) }
    });

    if (!existingUser) {
      return res.status(404).json({ error: "user not found" });
    }

    await prisma.shop.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: "user deleted sucessfully" });
  } catch (error) {
    console.log(error);
    console.log("internal serval eeror");
    return res.status(500).json({ error: "internal server error" });
  }
};

// update shop

export const updateShop = async (req, res) => {
  try {
    console.log("api is running");
    const { id } = req.params;
    // console.log(req.body);
    console.log(typeof id);

    if (!id) {
     return res.status(400).json({ message: "id is not available" });
    }
   
  
    console.log("db call ho rha hai amdarchod")
    const existingShop = await prisma.shop.findUnique({
      where: { id: Number(id) }

    });

    console.log(existingShop)

    if (!existingShop) {
      
      res.status(404).json({ message: "shop not found" });
    }

    const updateShop = await prisma.shop.update({
      where: { id: Number(id) },
      data: req.body,
    });
    console.log(updateShop)

    res.status(200).json({ message: "update sucessfully", shop: updateShop });
  } catch (error) {
    console.error("Error updating shop:", error);
  return  res.status(500).json({ error: "Internal server error" });
  }
};
