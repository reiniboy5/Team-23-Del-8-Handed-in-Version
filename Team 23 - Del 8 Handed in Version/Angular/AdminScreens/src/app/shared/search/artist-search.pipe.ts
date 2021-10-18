import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/model/Users/user';

@Pipe({
  name: 'artistSearch',
})
export class ArtistSearchPipe implements PipeTransform {
  transform(Users: User[], searchValue: string): User[] {
    if (!Users || !searchValue) {
      return Users;
    }
    return Users.filter((user) =>
      user.userFirstName
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
  }
}
