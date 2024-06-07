import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from "react";
import { RiGolfBallFill } from 'react-icons/ri';
import { MdOutlineAlbum } from "react-icons/md";
import { MdOutlineDownloading } from "react-icons/md"

function Listitem({ Data, setData }) {
  const url = "https://jsonplaceholder.typicode.com/albums"
  useEffect(() => {
    setTimeout(() => {
      fetch(url).then(response => response.json())
        .then(json => setData(json))
        .catch(error=>console.log('Error',error))
    }, 2000)
  }, [Data,setData])
  return (
    <>
      {Data.length === 0 ? <Box height="10vh" display={'flex'} justifyContent={'center'} alignItems={'center'} margin="auto" borderRadius={2} sx={{ border: '1px solid grey', bgcolor: 'grey', mt: 2, fontWeight: 'bold', fontSize: '20px', width:"50%"}}>
        <MdOutlineDownloading className='text-white mr-2' />
        <h3 className="text-white font-mono">Loading ...</h3>
      </Box> : <Box height="auto" margin="auto" borderRadius={2} sx={{ border: '1px solid grey', bgcolor: 'grey', mt: 2, width:'55%'}}>
        <List className='album' margin='auto' sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', m: 1 }} >
          {Data.map(list => <ListItem sx={{ display: 'flex', justifyContent: 'center', m: 1, borderRadius: '3px', pr: 3, fontWeight: 500, color: 'white', bgcolor: 'rgba(0,0,0,0.5)' }} key={list.id}>{list.title}</ListItem>)}
        </List>
      </Box>
      }
    </>

  )
}

export default Listitem