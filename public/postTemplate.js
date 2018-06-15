var peopleData = document.getElementById('payData');
var salaryPostTemplate = Handlebars.compile(salaryPost.handlebars);

Handlebars.registerHelper(payData, function(text){
  text = Handlebars.Utils.excapeExpression(text);
  retrun new Handlebars.SafeString(text);
});
