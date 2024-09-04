import { useGetReposQuery } from '../api/githubReposApi';


const DescriptionRepo = ({ activeId }) => {

  const { data } = useGetReposQuery();

  const selectedRepo = data?.items?.find(item => item.id === activeId);
  // console.log('data', data)
  // console.log('items', data.items)
  return (
    <div>
      <h2>Название репозитория</h2>
      <p>{selectedRepo ? selectedRepo.name : 'Выберете репозиторий'}</p>
    </div>
  );
};


export default DescriptionRepo;
