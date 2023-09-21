import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceByCharacter'
})
export class ReplaceByCharacterPipe implements PipeTransform {
    transform(value: string, pattern: string, replaceByCharacter:string): string {
        return value.replace(pattern, replaceByCharacter);
    }
}