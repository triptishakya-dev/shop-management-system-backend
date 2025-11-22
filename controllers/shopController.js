export const addShop = async (req, res) => {
  try {
    const {
      Name,
      ownerName,
      Address,
      Phone,
      Email,
      City,
      State,
      pincode,
      gstNumber,
      category,
    } = req.body;

    if (
      !Name ||
      !ownerName ||
      !Address ||
      !Phone ||
      !Email ||
      !City ||
      !State ||
      !pincode ||
      !gstNumber ||
      !category
    ) {
      return res.Status(400).json({ message: " all fields required" });
    }

    const newShop = await prisma.Shop.create({
      data: {
        Name,
        ownerName,
        Address,
        Phone,
        Email,
        City,
        State,
        pincode,
        gstNumber,
        category,
      },
    });
    res.status(201).json({
      message: "shop created successfully",
      addShop: newShop,
    });
  } catch (error) {
    console.log("error");
  }
};
