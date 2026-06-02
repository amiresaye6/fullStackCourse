const fs = require("fs");

const getBlogsFromDb = () => {
    let data = [];
    try {
        data = JSON.parse(fs.readFileSync("./fileDatabase.json", "utf-8"));
        console.log(data[0].title);

    } catch (error) {
        console.log(error.message);

    } finally {
        return data;
    }
}

const saveBlogToDB = (blog) => {
    const oldData = getBlogsFromDb();
    oldData.push({
        ...blog,
        id: oldData.length
    });

    fs.writeFileSync("./fileDatabase.json", JSON.stringify(oldData));
}

const deleteBlogFromDB = (blogId) => {
    const oldData = getBlogsFromDb();
    const newData = oldData.filter(d => d.id != blogId)

    fs.writeFileSync("./fileDatabase.json", JSON.stringify(newData));
    console.log("after delte");
    
}

// saveBlogToDB({
//     title: "new test form code",
//     authro: "not Amir Alsayed",
//     content: "aaaaaaaaaaaaaaaaaaaaaaaa",
//     tag: "old",
//     image: "https://www.expeditions.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fb4bpxrz16gb9%2F73cbd46d0f4b44e382a47d2df2312429%2F28b3a115caebbf867d9e9ec85c55bd1e%2Flindblad-expeditions-greenland-nuuk-1396286439-1.jpg&w=3840&q=75",
// })

module.exports = {
    getBlogsFromDb,
    saveBlogToDB,
    deleteBlogFromDB,
}