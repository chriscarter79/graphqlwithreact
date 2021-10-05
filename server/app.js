const express = require("express");
const { graphqlHTTP, graphiql } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
	"mongodb+srv://chris:HXidZaOMyTk5WHG5@graphqltest.dr3fp.mongodb.net/GraphQLTest?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
	console.log("connected to database");
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(5000, () => {
	console.log("Now listening for requests on port 5000");
});
