package com.social.media.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SocialUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "user")
    //@JoinColumn(name = "social_profile_id")
    private SocialProfile socialProfile;

    @OneToMany(mappedBy = "socialUser")
    private List<Post> posts = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "user_group",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id")
    )
    private Set<SocialGroup> groups = new HashSet<>();

    @Override
    public int hashCode(){
        return Objects.hash(id);
    }
}
