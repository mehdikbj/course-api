package io.octo.springbootstarter.topic;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class TopicService {

    private List<Topic> topics = Arrays.asList(
            new Topic("spring", "spring framework", "spring framework description"),
            new Topic("java", "java framework", "java framework description"),
            new Topic("react", "react framework", "react framework description")
    );

    public List<Topic> getAllTopics() {
        return topics;
    }

    public Topic getTopic(String id) {
        Topic result = null;
        for (Topic temp : topics) {
            if (id.equals(temp.getId())) {
                result = temp;
            }
        }
        return result;
    }

}
