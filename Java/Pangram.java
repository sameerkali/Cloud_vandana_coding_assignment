import java.util.*;

public class Pangram {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter your sentence: ");
    String input = scanner.nextLine().toLowerCase();
    boolean isPangram = checkIfPangram(input);

    if (isPangram) {
      System.out.println("The input pangram.");
    } else {
      System.out.println("The input is not a pangram.");
    }

    scanner.close();
  }

  public static boolean checkIfPangram(String input) {
    boolean[] letterPresent = new boolean[26];

    for (int i = 0; i < input.length(); i++) {
      char c = input.charAt(i);
      if ('a' <= c && c <= 'z') {
        letterPresent[c - 'a'] = true;
      }
    }

    for (int i = 0; i < letterPresent.length; i++) {
      if (!letterPresent[i]) {
        return false;
      }
    }

    return true;
  }
}
