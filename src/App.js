import React from 'react';
import './App.css';
import { Typography, Grid, Paper } from '@material-ui/core';

function App() {

  const deck = require('./decklists/EchoDD.json');
  const maincards = Object.keys(deck.main);
  const sidecards = Object.keys(deck.side);

  return (
    <div className="App">
      <Grid container>
        {
          maincards.map((it, index) => {
            return (<Grid item xs>
                      <Paper style={{margin: "2px", backgroundColor:"LightSteelBlue", paddingRight:"5px", paddingLeft: "5px"}}>
                        <div>
                          <Typography noWrap key={index}>{deck.main[it]} {it}</Typography>
                        </div>
                      </Paper>
                    </Grid>)
        })
        }
       </Grid>
       <hr/>
       <Grid container>
        {
          sidecards.map((it, index) => {
            return (<Grid item xs>
                      <Paper style={{margin: "2px", backgroundColor:"Gainsboro", paddingRight:"5px", paddingLeft: "5px"}}>
                        <div>
                          <Typography style={{margin: "2px"}} noWrap key={index}> {deck.side[it]} {it}</Typography>
                        </div>
                      </Paper>
                    </Grid>)
        })
        }
      </Grid>
    </div>
  );
}

export default App;
