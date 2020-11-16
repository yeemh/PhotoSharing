import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
});

class Folder extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>사진</TableCell>
              <TableCell>날짜</TableCell>
              <TableCell>위치</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <img
                  className="img-fluid offset-0_5"
                  src={require("./images/풍경사진/춘천.jpg")}
                  alt="load failed"
                  width={400}
                />
              </TableCell>
              <TableCell>
                <h1>2017-07-20</h1>
              </TableCell>
              <TableCell>
                <h1>강원</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  className="img-fluid offset-0_5"
                  src={require("./images/풍경사진/seoul.jpg")}
                  alt="load failed"
                  width={400}
                />
              </TableCell>
              <TableCell>
                <h1>2018-10-09</h1>
              </TableCell>
              <TableCell>
                <h1>서울</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  className="img-fluid offset-0_5"
                  src={require("./images/풍경사진/도쿄.jpg")}
                  alt="load failed"
                  width={400}
                />
              </TableCell>
              <TableCell>
                <h1>2019-02-23</h1>
              </TableCell>
              <TableCell>
                <h1>도쿄</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  className="img-fluid offset-0_5"
                  src={require("./images/풍경사진/용인.jpg")}
                  alt="load failed"
                  width={400}
                />
              </TableCell>
              <TableCell>
                <h1>2019-04-10</h1>
              </TableCell>
              <TableCell>
                <h1>경기</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  className="img-fluid offset-0_5"
                  src={require("./images/풍경사진/한강.jpg")}
                  alt="load failed"
                  width={400}
                />
              </TableCell>
              <TableCell>
                <h1>2019-10-16</h1>
              </TableCell>
              <TableCell>
                <h1>서울</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  className="img-fluid offset-0_5"
                  src={require("./images/풍경사진/속초.JPG")}
                  alt="load failed"
                  width={400}
                />
              </TableCell>
              <TableCell>
                <h1>2020-05-24</h1>
              </TableCell>
              <TableCell>
                <h1>강원</h1>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(Folder);
