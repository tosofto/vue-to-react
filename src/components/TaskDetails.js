import Button from 'react-bootstrap/Button';

export default function TaskDetails(props) {
	return (
	    <div>
			<Button variant="outline-dark">
			<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 5.61538L6.25 11L16 1" stroke="#0F393B" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
			<span>Mark it as complete</span>
			</Button>
	    </div>
	  );
}