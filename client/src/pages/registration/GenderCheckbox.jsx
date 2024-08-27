
const GenderCheckbox = ({ onCheck, selectedGender }) => {
    return (
        <div className='flex mt-2'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender ==='male' ? "selected" : ""}`}>
                    <span className='label-text text-white '>Male</span>
                    <input onChange={() => onCheck("male")} checked={selectedGender === "male"} type='checkbox' className='checkbox w-5 h-5 border-slate-900 bg-white opacity-50' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender ==='female' ? "selected" : ""}`}>
                    <span className='label-text text-white '>Female</span>
                    <input onChange={() => onCheck("female")} checked={selectedGender === "female"} type='checkbox' className='checkbox w-5 h-5 border-slate-900 bg-white opacity-50' />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;