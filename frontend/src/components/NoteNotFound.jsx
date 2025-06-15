import { NotebookIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const NoteNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16  max-w-md mx-auto text-center'>
        <div className='bg-primary/10 rounded-full p-8'>
                <NotebookIcon className='size-15 text-primary'/>
        </div>
        <h3 className='text-2xl font-bold'>No notes yet</h3>
        <p className='text-base-content/70 '>
            Ready to organize your thoughts? Create your note to get started on your journey.
        </p>
        <div className='pt-9 rounded-xl'>
            <Link to="/create" className='btn btn-accent'>
            Create Your First Note
        </Link>
        </div>
    </div>
  )
}

export default NoteNotFound