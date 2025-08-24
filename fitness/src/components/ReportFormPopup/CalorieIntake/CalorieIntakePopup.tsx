import React, { useState, useEffect } from 'react'
import '../popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from "react-horizontal-datepicker";
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface CalorieIntakeItem {
  item: string;
  quantity: number;
  quantitytype: string;
  calorieIntake: number;
  date: string;
  _id?: string;
}

interface CaloriIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({ setShowCalorieIntakePopup }) => {
  const color = '#ffc20e'

  const [date, setDate] = useState<Date>(new Date())
  const [foodItem, setFoodItem] = useState<string>('')
  const [quantity, setQuantity] = useState<string>('')
  const [quantityType, setQuantityType] = useState<string>('g')
  const [time, setTime] = useState<Dayjs | null>(dayjs())
  const [calorieItems, setCalorieItems] = useState<CalorieIntakeItem[]>([
    { item: 'Apple', quantity: 100, quantitytype: 'g', calorieIntake: 52, date: new Date().toISOString() },
    { item: 'Banana', quantity: 200, quantitytype: 'g', calorieIntake: 89, date: new Date().toISOString() },
    { item: 'Rice', quantity: 300, quantitytype: 'g', calorieIntake: 130, date: new Date().toISOString() }
  ])
  const [loading, setLoading] = useState<boolean>(false)

  const selectedDay = (val: Date) => {
    setDate(val)
  };

  const handleSubmit = () => {
    if (!foodItem.trim() || !quantity.trim()) {
      alert('Please fill in all fields')
      return
    }

    const newItem: CalorieIntakeItem = {
      item: foodItem,
      quantity: parseFloat(quantity),
      quantitytype: quantityType,
      calorieIntake: Math.round(parseFloat(quantity) * 0.5), // Simple calculation
      date: date.toISOString()
    }

    setCalorieItems([...calorieItems, newItem])
    setFoodItem('')
    setQuantity('')
  }

  const handleDelete = (index: number) => {
    const newItems = calorieItems.filter((_, i) => i !== index)
    setCalorieItems(newItems)
  }

  return (
    <div className='popupout'>
      <div className='popupbox'>
        <button className='close'
          onClick={() => {
            setShowCalorieIntakePopup(false)
          }}
        >
          <AiOutlineClose />
        </button>

        <DatePicker 
          getSelectedDay={selectedDay}
          endDate={100}
          selectDate={date}
          labelFormat={"MMMM"}
          color={color}
        />

        <TextField 
          id="food-item" 
          label="Food item name" 
          variant="outlined" 
          color="warning"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <TextField 
            id="quantity" 
            label="Amount" 
            variant="outlined" 
            color="warning"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ flex: 1 }}
          />
          <select 
            value={quantityType} 
            onChange={(e) => setQuantityType(e.target.value)}
            style={{ 
              padding: '15px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              backgroundColor: 'white',
              height: '56px'
            }}
          >
            <option value="g">gms</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
          </select>
        </div>

        <div className='timebox'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock 
              value={time} 
              onChange={(newValue) => setTime(newValue)}
            />
          </LocalizationProvider>
        </div>
        
        <Button 
          variant="contained" 
          color="warning"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save'}
        </Button>
        
        <div className='hrline'></div>
        
        <div className='items'>
          {calorieItems.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666' }}>No items added yet</p>
          ) : (
            calorieItems.map((item, index) => (
              <div key={index} className='item'>
                <h3>{item.item}</h3>
                <h3>{item.quantity} {item.quantitytype}</h3>
                <h3>{item.calorieIntake} cal</h3>
                <button onClick={() => handleDelete(index)}>
                  <AiFillDelete />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CalorieIntakePopup
