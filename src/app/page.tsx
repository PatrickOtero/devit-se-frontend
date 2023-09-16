import JobPostingForm from '../components/molecules/JobPostingForm/index'
import JobPostingForm2 from '../components/molecules/JobPostingForm2/resumo'
import JobPostingForm3 from '@/components/molecules/JobPostingForm3/empresa'
import JobPostingForm4 from '@/components/molecules/JobPostingForm4/resumo2'


export default function Home() {
  return (
    <>
    <JobPostingForm2></JobPostingForm2>
    <JobPostingForm3></JobPostingForm3>
    <JobPostingForm></JobPostingForm> 
    <JobPostingForm4></JobPostingForm4>
    </>
    
  )
}
