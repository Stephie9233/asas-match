export const adminHomeController = {
  renderHomePage(req, res) {
    const css = "adminHome";
    res.render('adminHome', { css });
  },
};
