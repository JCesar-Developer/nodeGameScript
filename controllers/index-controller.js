const renderIndex = (req, res) => {
    res.render("index");
  };
  
const renderContact = (req, res) => {
    res.render("contact");
  };

module.exports = {
    renderIndex,
    renderContact,
}