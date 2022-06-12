import { memo } from 'react';

import Button from './Button';

import { GenreResponseProps } from '../@types/genre';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  genres,
  selectedGenreId,
  handleClickButton,
}) => (
  <nav className="sidebar">
    <span>
      Watch<p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map((genre: GenreResponseProps) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
);

export default memo(SideBar)
