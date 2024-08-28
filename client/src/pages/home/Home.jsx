// import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px]  overflow-hidden  drop-shadow-md bg-neutral-200 rounded-none'>
			<Sidebar />
			<MessageContainer />
            
		</div>
	);
};
export default Home;