import { useEffect, useRef, useState } from "react"

export default function Otp({n}:{ n: number})
{
    const [ otp , setOtp ]= useState< (string )[]>( Array( n ).fill(""));
    const inputRef = useRef<(HTMLInputElement| null)[]>([]);
    useEffect(()=>{
        inputRef.current[0]?.focus();
    },[])
    function handleChange( e:React.ChangeEvent<HTMLInputElement>,index: number )
    {
        const value = e.target.value.slice(-1);
        console.log( value );
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp( newOtp );

        if (value && index < n - 1) {
            inputRef.current[index + 1]?.focus();
          }
        
    }

    function handleKey( e: React.KeyboardEvent<HTMLInputElement>, index: number){
        if (
            e.key === "Backspace" &&
            otp[index] === "" &&
            index > 0
          ) 
            inputRef.current[index - 1]?.focus();

          }
    return <div className="flex gap-2">
        {
            Array.from({ length: n}).map((_, index: number)=>{
               return  <input ref = { ( el )=>{ inputRef.current[index] = el  }}key={ index } type="text" inputMode="numeric" maxLength={1} value={ otp[index] } onMouseDown={(e)=> e.preventDefault()} onKeyDown = { (e)=> handleKey( e, index ) } onChange={
                   ( e ) => handleChange( e , index)
               } className=" outline-2 outline-blue-300 text-center w-12 px-4 py-3  rounded-2xl"/>
            })
        }
    </div>
}