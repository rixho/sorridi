import React from "react";

const FAV_KEY = "sorridi_favorites";
const CMP_KEY = "sorridi_compare";

const read = (k)=>{ try{ return JSON.parse(localStorage.getItem(k)||"[]"); }catch{ return []; } };
const write = (k,v)=> localStorage.setItem(k, JSON.stringify(v));

export function useYachtActions(){
  const [favorites, setFavorites] = React.useState(()=>read(FAV_KEY));
  const [compare, setCompare] = React.useState(()=>read(CMP_KEY));

  const toggleFavorite = (y)=>{
    setFavorites(prev => {
      const exists = prev.find(p=>p.id===y.id);
      const next = exists ? prev.filter(p=>p.id!==y.id) : [...prev, y];
      write(FAV_KEY, next); return next;
    });
  };

  const addCompare = (y)=>{
    setCompare(prev => {
      if (prev.find(p=>p.id===y.id)) return prev;
      const next = [...prev, y].slice(-4); // max 4
      write(CMP_KEY, next); return next;
    });
  };

  const removeCompare = (id)=>{
    setCompare(prev=>{ const next = prev.filter(p=>p.id!==id); write(CMP_KEY, next); return next; });
  };

  return { favorites, compare, toggleFavorite, addCompare, removeCompare };
}
