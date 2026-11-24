
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;
import org.junit.jupiter.api.Test;

public class DfsBinaryGroupFinderTest {

    @Test
    void testNoGroups() {
        DfsBinaryGroupFinder finder = new DfsBinaryGroupFinder();

        int[][] image = {
            {0, 0, 0},
            {0, 0, 0},
            {0, 0, 0}
        };

        List<Group> groups = finder.findConnectedGroups(image);

        assertTrue(groups.isEmpty());
    }
}